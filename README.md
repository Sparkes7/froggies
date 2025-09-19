## Reflection

This weeks assignmen was a revisit to the image gallery from Week 2, but using React instead of vanilla JavaScript.
I struggled through a lot of issues this assignment to get the result I have. I spent a lot of time fighting with syntax, and trying to navigate around the component render life cycle

I was using a searchTerm state to pass into the API to change the images returned. The problem was that I needed the `value` from the `input` from inside my SearchBar component. I really struggled to find a solution to this but managed to find a video (linked below) that showed using the onChange attribute on the input itself could be used to pass a prop to the component that executes a callback function. From within this callback function, you can get the value of the target element (in this case, the value changing)

## Resources

[Passing Input Value on change](https://www.youtube.com/watch?v=91TIUURx5JM)
