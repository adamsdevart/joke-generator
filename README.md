# Joke Generator

A modern React application that generates programming jokes using the Joke API. Built with React 19, Vite, and modern best practices.

## Features

- 🎭 Random programming jokes
- ⚡ Fast loading with Vite
- 🎨 Modern, responsive UI with glassmorphism design
- ♿ Accessibility features (ARIA labels, keyboard navigation)
- 🔄 Loading states and error handling
- 🧩 Custom hooks for reusability
- 📱 Mobile-responsive design

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and dev server
- **PropTypes** - Runtime type checking
- **CSS3** - Modern styling with gradients and animations
- **Custom Hooks** - Reusable logic separation

## Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Reusable button component
│   └── Joke.jsx           # Main joke display component
├── hooks/
│   └── useJoke.js         # Custom hook for joke logic
├── styles/
│   ├── App.css            # App-specific styles
│   ├── Button.css         # Button component styles
│   └── Joke.css           # Joke component styles
├── App.jsx                # Main app component
└── main.jsx               # App entry point
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL.

## Best Practices Implemented

- ✅ Proper state naming conventions
- ✅ Error handling for API calls
- ✅ Loading states for better UX
- ✅ Prop destructuring and PropTypes
- ✅ Custom hooks for logic separation
- ✅ Accessibility improvements
- ✅ Responsive design
- ✅ CSS organization and naming
- ✅ Modern React patterns (functional components, hooks)

## API

This app uses the [Joke API](https://sv443.net/jokeapi/v2/) to fetch programming jokes.
