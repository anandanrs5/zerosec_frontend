import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrackRecords } from '../redux/action/action';

const DisplayWorkStatus = () => {
    const getAllRecords = useSelector((state) => state.get_all_track_records.inputData);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllTrackRecords());
        };
        fetchData();
    }, [dispatch]);

    const formatTime = (seconds) => {
        const pad = (num) => (num < 10 ? '0' : '') + num;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        if (hours > 0) {
            return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        } else if (minutes > 0) {
            return `${pad(minutes)}:${pad(secs)}`;
        } else {
            return `${pad(secs)}`;
        }
    };

    const formatTimeFullWorking = (seconds) => {
        const pad = (num) => (num < 10 ? '0' : '') + num;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        if (hours > 0) {
            return `${pad(hours)}:${pad(minutes)}:${pad(secs)} hours`;
            // } else if (minutes > 0) {
            //     return `${pad(minutes)}:${pad(secs)} minutes`;
        } else {
            return `${pad(minutes)}:${pad(secs)} minutes`;
            // return `${pad(secs)} seconds`;
        }
    };

    const getSecondsSinceStartOfDay = (isoDateString) => {
        const date = new Date(isoDateString);
        return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    };

    const calculateWorkingTime = (start, end) => {
        const startSeconds = getSecondsSinceStartOfDay(start);
        const endSeconds = getSecondsSinceStartOfDay(end);
        return endSeconds - startSeconds;
    };
    return (
        <div className=" overflow-x-auto border rounded-lg  m-5">
            <table className="table-auto w-full border-collapse ">
                <thead>
                    <tr className="bg-blue-200">
                        <th className=" px-4 py-5 text-2xl">Start Time</th>
                        <th className=" px-4 py-5 text-2xl">End Time</th>
                        <th className=" px-4 py-5 text-2xl">Total Working Time</th>
                    </tr>
                </thead>
                <tbody className=' text-xl font-semibold'>
                    {getAllRecords && getAllRecords.map((records, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-green-100" : ""}>
                            <td className="py-4 text-center ">{formatTime(getSecondsSinceStartOfDay(records.start_at))}</td>
                            <td className="py-4 text-center ">{formatTime(getSecondsSinceStartOfDay(records.stopped_at))}</td>
                            <td className="py-4 text-center ">{formatTimeFullWorking(calculateWorkingTime(records.start_at, records.stopped_at))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayWorkStatus;











