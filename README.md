# Image Gallery

Repository for an Angular image gallery exercise developed as part of the IT Academy track.

## Description

This project implements an Angular application based on standalone components to display an image gallery. The current structure separates the gallery page, the presentation components, and the image data model.

At the moment, the repository includes:

- An Angular application inside the `image-gallery/` folder.
- Routing with a redirect to the gallery page.
- A gallery component that receives an image collection through `input()`.
- An item component to render each image.
- Local state managed with `signal()`.
- Unit testing for the gallery page, the gallery component, and the gallery item component.

## Repository Structure

```text
.
|-- briefing-angular.md
|-- README.md
`-- image-gallery/
    |-- angular.json
    |-- package.json
    |-- src/
    `-- ...
```

## Tech Stack

- Angular 21
- TypeScript
- Angular Signals
- Tailwind CSS 4
- Vitest through Angular's test builder

## Getting Started

### 1. Install Dependencies

```bash
cd image-gallery
npm install
```

### 2. Run the Application in Development

```bash
npm start
```

### 3. Run the Tests

```bash
npm test -- --watch=false
```

### 4. Build the Project

```bash
npm run build
```

## Available Scripts

From the `image-gallery/` folder:

- `npm start`: starts the development server.
- `npm test -- --watch=false`: runs the test suite once.
- `npm run build`: generates the production build.
- `npm run watch`: builds in development mode with watch enabled.

## Main App Structure

Inside `image-gallery/src/app/`:

- `pages/gallery/`: container page for the gallery and its related data.
- `components/gallery/`: presentation components for the gallery.
- `interfaces/`: TypeScript domain contracts.

## Exercise Goal

This repository follows the briefing defined in `briefing-angular.md`, focused on practicing:

- Component design
- Component communication
- State management with Signals
- Testing in Angular
- Code and repository organization

## Current Status

The current implementation covers the gallery foundation and its unit testing. The briefing includes additional UX and feature iterations that can be developed on top of this base.
