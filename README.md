# React test

I have built the following in the time I have available.
I wanted to get the basic structure of the app running.
I did the following in the test you sent me:
 - reads the records from the sensor_readings.json
 - displays them in a tabular component (nothing too ugly)
 - allows the user to sort data by time and sensor type
 - allow user to enter new sensor data.
 - plot a graph of sensor readings over time.

 #### Here is a list of the main modules I used
  - "bootstrap": "^4.4.1",
  - "final-form": "^4.18.7",
  - "lodash": "^4.17.15",
  - "react": "^16.12.0",
  - "react-dom": "^16.12.0",
  - "react-final-form": "^6.3.5",
  - "react-redux": "^7.2.0",
  - "react-responsive-modal": "^4.0.1",
  - "react-scripts": "3.4.0",
  - "react-table": "^7.0.0-rc.16",
  - "recharts": "^2.0.0-beta.1",
  - "redux": "^4.0.5",
  - "styled-components": "^5.0.1"

#### The following is still todo
- Add config to turn off on production the redux dev tools
- Write tests
- Override bootstrap with custom styles
- Add animation transitions
- Maybe this could be written in typescript to give better type checking
- Get the data from a rest api
- Add more detailed input validation in the form
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

#### Clone the application
```
git clone git@github.com:code-in-time/react-take-home-test-1.git
```

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
