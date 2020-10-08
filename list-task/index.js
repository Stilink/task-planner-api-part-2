module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    // Implement the response
    const responseMessage = { response: "List of all task"};

    context.res = {
        status: 200,
        body: responseMessage
    };
}
