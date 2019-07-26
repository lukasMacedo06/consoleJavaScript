const keyDebugUserAgent = 'debugAgentZ';

/**
 * Check if the debug agent was sent in UserAgent
 * @return {Boolean}      Inform if the debug mode it will be enabled
 */
function getUserAgentDebug() {
    let currUserAgent = navigator.userAgent;
    let ret = currUserAgent.indexOf(keyDebugUserAgent);

    return ret >= 0 ? true : false;
}

const enableUserAgentDebug = getUserAgentDebug();

/**
 * Print on the console if the application is in debug mode
 * @param  {String} type Type of the console will be called
 * @param  {Multiple} message The data that will be show
 * @return {VoidFunction}
 */
function debugCnl(type, ...message) {
    if (enableUserAgentDebug) {
        console[type](...message);
    }
}

/**
 * Print error on the console if the application is in debug mode
 * @param  {String} title Title of the message
 * @param  {String} description Description of the message
 * @return {VoidFunction}
 */
function errorCnl(title, description, extra = null) {
    console.trace('Trace error form origin');
    let template = `#############################
Title:
        ${title} \n \n%cProblem Description:
        ${description}
#############################`;

    console.error(template, 'font-weight: bold;');

    if (extra !== null) {
        console.error(" Extra Data: \n", extra);
    }
}