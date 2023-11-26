"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns-tz';

export default function SendAlertClient() {
  const [scheduledTime, setScheduledTime] = useState('18:00'); // Default scheduled time
  const [newTaskTime, setNewTaskTime] = useState('');
  const [newTaskName, setNewTaskName] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', time: '09:00 AM', task: 'Morning Vitamins' },
   

  
  ]);


  const sendAlert = async () => {
    const apiUrl = 'http://127.0.0.1:5000/api/scheduleAlert';

    try {
      const response = await axios.post(apiUrl, {
        scheduledTime: scheduledTime,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error sending alert:', error);
    }
  };

  // Function to calculate the time until the next scheduled alert
  const calculateTimeUntilNextAlert = (scheduledTime) => {
    const now = new Date();
    const scheduledDate = new Date(scheduledTime);
    const timeUntilNextAlert = scheduledDate - now;
    return Math.max(timeUntilNextAlert, 0); // Ensure it's non-negative
  };

  // Function to schedule the next alert
  const scheduleNextAlert = () => {
    
    const timeZone = 'America/New_York';

    const formattedScheduledTime = format(new Date(), 'yyyy-MM-dd', { timeZone }) + `T${scheduledTime}:00`;

    const timeUntilNextAlert = calculateTimeUntilNextAlert(formattedScheduledTime);

    setTimeout(sendAlert, timeUntilNextAlert);
  };

  const addTask = () => {
    if (newTaskTime && newTaskName) {
      setTasks([...tasks, { time: newTaskTime, task: newTaskName }]);
      setNewTaskTime('');
      setNewTaskName('');
    }
  };
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  // Schedule the first alert when the component mounts
  useEffect(() => {
    scheduleNextAlert();
  }, []); // Empty dependency array 


  return (
    <main className="flex min-h-screen flex-col items-center  bg-coconut">
    <div className="w-[11px] top-7 text-left justify-left fixed left-20 text-black text-3xl bg-coconut "style={{ fontFamily: 'Footlight MT Light'}}>Remind</div>
      <br />
      <label className='top-0' style={{ fontFamily: 'Footlight MT Light'}}>
        Select a time: 
       </label>
        <input
          type="time"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
          className='border p-2 '
        />
      <br/>

      <button class="bg-brown hover:bg-green py-2 px-5 text-white rounded-md" style={{ fontFamily: 'Footlight MT Light'}} onClick={scheduleNextAlert}>Schedule Next Reminder</button>
      <p className='mt-2 p-5' style={{ fontFamily: 'Footlight MT Light'}}S>Next alert will be scheduled for {scheduledTime} (Eastern Standard Time)</p>

      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          {/* ... other elements ... */}
          <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              {tasks.map((task) => (
                <div key={task.id} className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                  <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                    {task.time}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    <a href="#" className="hover:underline">
                      {task.task}
                    </a>
                  </h3>
                  <button
                    className="bg-red-500 hover:bg-red-700 py-1 px-2 ml-2 text-white rounded-md"
                    onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              ))}
             
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Task Time"
                  value={newTaskTime}
                  onChange={(e) => setNewTaskTime(e.target.value)}
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Task Name"
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  className="border p-2 rounded-md"
                />
                <button
                  className="bg-coconut hover:bg-green py-2 px-4 rounded-md" style={{ fontFamily: 'Footlight MT Light'}}
                  onClick={addTask} >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}