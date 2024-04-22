import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startTracking, stopTracking } from '../redux/action/action';

const Timer = () => {
    const dispatch = useDispatch();
    const [startTime, setStartTime] = useState(localStorage.getItem('startTime') || null);
    const [timerRunning, setTimerRunning] = useState(localStorage.getItem('timerRunning') === 'true');
    const [isRecording, setIsRecording] = useState(localStorage.getItem('isRecording') === 'true');
    const [elapsedTime, setElapsedTime] = useState(0);
    const currentLocalDate = new Date();
    const timeAt = currentLocalDate.toISOString();

    useEffect(() => {
        const isRecordingStr = localStorage.getItem('isRecording');
        if (isRecordingStr && isRecordingStr === 'true') {
            setIsRecording(true);
            const storedStartTime = localStorage.getItem('startTime');
            setStartTime(storedStartTime);
        }
    }, []);

    useEffect(() => {
        if (startTime && timerRunning) {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const elapsedTime = Math.floor((now - new Date(startTime).getTime()) / 1000);
                setElapsedTime(elapsedTime);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [startTime, timerRunning]);

    const startRecord = async () => {
        const now = new Date().toISOString();
        setStartTime(now);
        setTimerRunning(true);
        setIsRecording(true);
        localStorage.setItem('startTime', now);
        localStorage.setItem('timerRunning', true);
        localStorage.setItem('isRecording', true);
        const user = localStorage.getItem("userDetails");
        const parseData = JSON.parse(user);
        const workStatus = {
            "user_id": parseData.id,
            "start_at": timeAt,
            "stopped_at": null
        }
        const apiResponse = await dispatch(startTracking(workStatus));
        console.log(apiResponse)
    };

    const stopRecord = async () => {
        setTimerRunning(false);
        setIsRecording(false);
        localStorage.removeItem('isRecording');
        localStorage.removeItem('timerRunning');
        localStorage.removeItem('startTime');

        const user = localStorage.getItem("userDetails");
        const parseData = JSON.parse(user);
        const workStatus = {
            "user_id": parseData.id,
            "stopped_at": timeAt
        }
        const apiResponse = await dispatch(stopTracking(workStatus));
        console.log(apiResponse)
    };

    const formatTime = (seconds) => {
        const pad = (num) => (num < 10 ? '0' : '') + num;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    };

    return (
        <div className="container mx-auto px-4">
            <div className="section">
                <div className="flex flex-col">
                    <button
                        className="p-4 bg-green-300 border rounded-lg mt-5 text-2xl font-bold "
                        onClick={isRecording ? stopRecord : startRecord}
                        disabled={isRecording}
                    >
                        {isRecording ? `Recording: ${formatTime(elapsedTime)}` : 'Start Record'}
                    </button>
                    {isRecording && (
                        <button className="stop_btn p-4 bg-red-300 border rounded-lg mt-5 text-2xl font-bold " onClick={stopRecord}>
                            Stop Record
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timer;
