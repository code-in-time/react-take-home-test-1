# React test

I have built the following in the time I have available.
I wanted to get the the basic structure of the app running.
I did the following in the test
 - reads the records from the sensor_readings.json
 - displays them in a tabular component (nothing too ugly)
 - allows the user to sort data by time and sensor type
 - allow user to enter new sensor data.
 - plot a graph of sensor readings over time.

 #### Here is a list of the main modules I used
 - react
-
-
-
-
-
-
-

#### The following is still todo
- Add config to turn off on production the redux dev tools
- Write testsTest
- Override bootstrap with custom styles
- Add animation transitions
- Maybe this could be written in typescript to give better type checking
- Get the data from a rest api
- Add more detailed input validation
- Make all styling the same mechanism either css or style components
- Add a calendar control for the reading_ts input
- Add error messages
- Improve the UI experience
- Improve responsiveness
- Improve on layout
- Each input requires its own unique regex rule to validate
- Clear form after save
- The table refreshes when new data is added. Is this ok?
- Write in angular - learn angular
- Investigate warnings in the console
- Improve the performance of the chart


-----------
### A brief guide on how to run the project.

#### Install the modules
``` 
npm install
```

#### Run the application
``` 
npm run start
```

-----------
### Other notes
 #### Resources used
- https://codesandbox.io/s/laughing-moore-rrtqk
- https://getbootstrap.com/docs/4.4/content/tables/
- https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/pagination
- https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/sorting
- https://thoughtbot.com/blog/using-redux-with-react-hooks
- https://github.com/erikras/ducks-modular-redux
- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
- https://github.com/zalmoxisus/redux-devtools-extension
- https://codesandbox.io/s/9on71rvnyo
- http://recharts.org/en-US/guide/installation
- https://www.npmjs.com/package/react-responsive-modal
