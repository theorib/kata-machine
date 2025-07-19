# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "kata-machine" (also known as "Lig-Machine"), a TypeScript-based algorithm and data structure practice platform developed live on [ThePrimeagen's Twitch stream](https://twitch.tv/ThePrimeagen). The project generates daily coding challenges for practicing algorithms and data structures.

## Core Architecture

The project uses a unique daily practice system:

- **Algorithm Templates**: Located in `src/__tests__/` - these contain the test files and expected implementations
- **Daily Practice Folders**: Generated as `src/day1/`, `src/day2/`, etc. containing algorithm stubs to implement
- **Configuration**: `ligma.config.js` defines which algorithms to include in each generated day
- **Generation System**: `scripts/generate.js` creates new practice folders and updates TypeScript paths

### Key Files and Directories

- `src/__tests__/`: Contains all test files and reference implementations
- `src/dayN/`: Generated practice folders with algorithm stubs to implement  
- `scripts/dsa.js`: Contains algorithm definitions, descriptions, and metadata
- `ligma.config.js`: Configuration for which algorithms to generate
- `vitest.config.ts` & `tsconfig.json`: Auto-updated to point to current day via `@code/*` alias

## Development Commands

### Core Workflow
- `npm run generate` or `pnpm generate`: Create a new day of practice problems
- `npm test` or `pnpm test`: Run tests for all configured algorithms
- `npm run day`: Show current day directory (src/day8)

### Utility Commands  
- `npm run clear`: Clear/reset generated content
- `npm run prettier`: Format code in src/ directory

## Testing System

Uses Vitest for testing with these key aspects:

- Tests are located in `src/__tests__/` 
- The `@code` alias automatically points to the current day's implementation folder
- Tests import from `@code/AlgorithmName` to test your implementations
- Running `npm test` tests all algorithms defined in the test script

## TypeScript Configuration

The project uses dynamic TypeScript path mapping:
- `@code/*` alias points to current day folder (e.g., `src/day8/*`)
- Both `tsconfig.json` and `vitest.config.ts` are auto-updated by generation scripts
- Base URL set to `src/` for clean imports

## Code Generation

When you run `pnpm generate`:
1. Reads `ligma.config.js` to get algorithm list
2. Creates new `dayN` folder with algorithm stubs
3. Updates TypeScript and Vitest configs to point to new day
4. Generates files with TSDoc comments including descriptions and parameter docs

## Current State

The current working day is `day8` as indicated by the TypeScript paths. The project includes implementations for algorithms like binary search, bubble sort, linked lists, trees, graphs, and more.

## Package Manager

The project supports both npm and pnpm. Installation instructions in README mention pnpm, but package.json scripts work with npm as well.