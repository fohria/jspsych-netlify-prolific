# jspsych-netlify-prolific

launch your [jspsych](https://www.jspsych.org) experiment on netlify. data is collected using netlify forms. no need to setup a database!

**NOTE:** https://www.cognition.run/ looks like a better version of the ease-of-use i wanted this tool to be. the free version of netlify has a limit of 100 submissions per month and cognition.run allows for unlimited submissions for free. therefore it's currently unlikely i will further develop this tool, but leaving it up in case it helps someone else :)

### potential advantages of this tool over cognition.run
the only potential advantage of this tool would be that netlify has a worldwide CDN (content delivery network) that makes the experiment load very fast regardless of where in the world your participants are.

## things you need to use this thingie

- jspsych experiment
- [prolific](https://www.prolific.co) for participant recruitment

more options may come later.

## how to use this thing

### 1. create netlify account
https://app.netlify.com

now you can either use github to launch your site, or manually upload your experiment.

### 2. github way
- fork this repo
- switch experiment.js for your experiment file and add any other files like images
- add the plugins you use to index.html
- edit `YOURCODEHERE` in the `subbit` javascript function to your prolific experiment's completion code
- push changes to github
- create new netlify site with your repo

### 2. manual folder upload
- download this thing (i.e. zip folder of this repo)
- switch experiment.js for your experiment file and add any other files like images
- add the plugins you use to index.html
- edit `YOURCODEHERE` in the `subbit` javascript function to your prolific experiment's completion code
- create new netlify site by going to the "sites" section and towards the bottom there's a drag and drop area to upload your folder

### 3. start collecting submissions!
netlify will launch the site within seconds, and provide you with a link. when testing, you'll need to manually add `?PROLIFIC_PID` to the end of the URL for that to be recorded

### 4. see and download submissions
go to the "forms" page for your netlify site, then click on the form name to see submissions and/or download a csv with all submissions

### 5. the downloaded csv will have 5 columns
these columns are: jspsych-data, ip, user_agent, referrer and created_at

the first is the usual jspsych data, in csv form, so it's a csv inside a csv. it's on the todo-list to automate parsing of this csv. the other fields are useful to, for example, compare submission times with prolific's data to spot potential slackers/cheaters.

## links

[forms docs @ netlify](https://docs.netlify.com/forms/setup/#submit-forms-via-ajax)

[jspsych](https://www.jspsych.org) 