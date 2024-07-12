function countDownTimer() {
    let birthday: number = Number(localStorage.getItem('birthday'));
    const currentTimestamp: number = Date.now();

    let total_seconds: number = (birthday - currentTimestamp) / 1000;
    let total_seconds_remaining_for_hours: number = total_seconds % 86400;
    let total_seconds_remaining_for_minutes: number = total_seconds_remaining_for_hours % 3600;

    let days: number = Math.floor(total_seconds / 86400);
    let hours: number = Math.floor(total_seconds_remaining_for_hours / 3600);
    let minutes: number = Math.floor(total_seconds_remaining_for_minutes / 60);
    let seconds: number = Math.floor(total_seconds_remaining_for_minutes % 60);

    console.log('days', days);
    console.log('hours', hours);
    console.log('minutes', minutes);
    console.log('seconds', seconds);
}