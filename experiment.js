// sample experiment, replace this file with your own experiment

var timeline = [];

var hello_trial = {
    type: 'html-keyboard-response',
    stimulus: 'sample experiment. click F or J when you see colored balls. click any key to begin.'
};

timeline.push(hello_trial);

var blue_trial = {
    type: 'image-keyboard-response',
    stimulus: 'blue.png',
    choices: ['f', 'j']
};

var orange_trial = {
    type: 'image-keyboard-response',
    stimulus: 'orange.png',
    choices: ['f', 'j']
}

timeline.push(blue_trial, orange_trial);

jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        subbit();
    }
});