# Image Gallery

Repository for an Angular image gallery exercise developed as part of the IT Academy track.

## Description

This project implements an Angular application based on standalone components to display an interactive image gallery. The current structure separates the gallery page, the presentation components, and the image data model.

At the moment, the repository includes:

- An Angular application inside the `image-gallery/` folder.
- Routing with a redirect to the gallery page.
- A gallery component with local state managed through `signal()`.
- An item component to render each image.
- A featured image area that updates when a thumbnail is selected.
- Drag and drop reordering for the thumbnail collection using Angular CDK.
- Individual image deletion from the gallery.
- Multiple image selection and bulk deletion.
- Unit testing for the gallery page, the gallery component, and the gallery item component.

## Features

- Responsive gallery layout with a featured image at the top.
- Thumbnail list that preserves the current order of the image collection.
- Click on a thumbnail to set it as the featured image.
- Reorder thumbnails with drag and drop.
- Delete individual images from the gallery.
- Select multiple images and remove them in a single action.
- Local reactive state handled with Angular Signals.

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
- Angular CDK
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

- `pages/gallery/`: container page for the gallery route.
- `components/gallery/`: gallery state and UI components.
- `interfaces/`: TypeScript domain contracts.

## Implemented Functionality

The current implementation supports the following user interactions:

- Displaying a featured image above the thumbnail collection.
- Selecting a different featured image by clicking a thumbnail.
- Reordering images with drag and drop.
- Removing an image from the gallery with a delete action.
- Selecting multiple images and deleting them with a bulk action.

Internally, the gallery state is handled inside the gallery component, which makes it possible to update the collection locally when items are reordered, removed individually, or deleted in batches.

## Exercise Goal

This repository follows the briefing defined in `briefing-angular.md`, focused on practicing:

- Component design
- Component communication
- State management with Signals
- Testing in Angular
- Code and repository organization

## Current Status

The current implementation covers the gallery foundation together with interactive behaviors such as featured image selection, thumbnail reordering, individual and multiple image deletion, and unit testing. The briefing includes additional UX and feature iterations that can still be developed on top of this base.
