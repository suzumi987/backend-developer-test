import cronJob from 'node-cron'

const task = cronJob.schedule('*/5 * * * * *', () => {
    console.log('running a task every 5 secoud');
});

export {
    task
}