# Run this file from your project root folder.
# Example:
# cd "C:\Users\Vignesh Kadiyala\Downloads\portfolio-website - Copy"
# powershell -ExecutionPolicy Bypass -File .\fix-github-pages-files.ps1

$ErrorActionPreference = "Stop"

New-Item -ItemType Directory -Force ".github\workflows" | Out-Null

$viteConfig = @"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Vignesh-Portfolio/',
})
"@

$deployYml = @"
name: Deploy Vite React app to GitHub Pages

on:
  push:
    branches: [main]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: `${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
"@

# Fix accidental escaping in the GitHub Actions expression.
$deployYml = $deployYml.Replace('`${{ steps.deployment.outputs.page_url }}', '${{ steps.deployment.outputs.page_url }}')

[System.IO.File]::WriteAllText((Join-Path (Get-Location) "vite.config.js"), $viteConfig, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path (Get-Location) ".github\workflows\deploy.yml"), $deployYml, [System.Text.UTF8Encoding]::new($false))

Write-Host "Fixed vite.config.js and .github\workflows\deploy.yml with proper multiline formatting."
Write-Host "Now run:"
Write-Host "npm run build"
Write-Host "git add vite.config.js .github/workflows/deploy.yml"
Write-Host "git commit -m 'Fix GitHub Pages workflow formatting'"
Write-Host "git push origin main"
