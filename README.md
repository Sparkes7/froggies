## Reflection

This weeks assignmen was a revisit to the image gallery from Week 2, but using React instead of vanilla JavaScript.
I struggled through a lot of issues this assignment to get the result I have. I spent a lot of time fighting with syntax, and trying to navigate around the component render life cycle

I was using a searchTerm state to pass into the API to change the images returned. The problem was that I needed the `value` from the `input` from inside my SearchBar component. I really struggled to find a solution to this but managed to find a video (linked below) that showed using the onChange attribute on the input itself could be used to pass a prop to the component that executes a callback function. From within this callback function, you can get the value of the target element (in this case, the value changing)

## Requirements

🎯✅ Implement the useState hook to manage gallery state (e.g. selected image).

- Images retreived from the API are stored in a state

🎯✅ Use useEffect for initial fetching of images from an external API.

- Fetch API is contained within useEffect, which also has a dependency to ensure the API fetches new images when a state is updated

🎯✅ Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).

- The thumbnails, large image (with navigation components), and search bar are separate components within the gallery component

🎯✅ Use the .map() function to render an array of images dynamically

- Thumbnail components are created after mapping through the images state.

🎯✅ Implement functionality to display a larger version of an image when its thumbnail is clicked.

- callback function added to thumbnails that when clicked changes the large image displayed by using the index of the images state.

🎯✅ Ensure all images have meaningful alt text.

- alt text applied to all thumbnails on creation

🎯✅ Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

- thumbnails are buttons, which has tabindex inheritently applied, to allow the user to tab across the images and hit space/enter to mimic a click event which changes the larger image.

## Stretch Requirements

🏹✅ Use useEffect and the dependancy array to update the images when the user types in an input field.

- search bar added which saves a search term in a state which is passed into the API fetching useEffect hook to update when a new search term is submitted

🏹✅ Set up an Unsplash application that you can fetch from your React app.

- Unsplash implemented!

🏹✅ Use .env to hide your API keys and tokens from the code.

- .env file used to hide the base URL of the API as well as the API access token. This token is read by the authorization header for the API.

🏹✅ Style the application excellently, using grid or flex and positioning.

- Went for a simple, clean look for this gallery. Has consistent styling with hover and focus effects styles. Thumbnails contained in a responsive-sized container with a scroll bar on smaller devices. A media query has been used on the search bar to center the search and make it larger on smaller devices, or away to the side on a larger display.

## Resources

[Passing Input Value on change](https://www.youtube.com/watch?v=91TIUURx5JM)

[Index Of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
