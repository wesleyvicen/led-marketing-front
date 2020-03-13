import styled from 'styled-components';

export const VerticalMenu = styled.div`
  width: 200px; /* Set a width if you like */
  a {
    background-color: #eee; /* Grey background color */
    color: black; /* Black text color */
    display: block; /* Make the links appear below each other */
    padding: 12px; /* Add some padding */
    text-decoration: none; /* Remove underline from links */
  }
  a:hover {
    background-color: #ccc; /* Dark grey background on mouse-over */
  }
  a:active {
    background-color: #4caf50; /* Add a green color to the "active/current" link */
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: green;
  .left {
    display: flex;
    flex: 2;
    background-color: brown;
    flex-direction: column;
    max-width: 13vw;
  }
  .right {
    display: flex;
    flex: 8;
    background-color: aqua;
    flex-direction: column;
    max-width: 87vw;
  }
`;
