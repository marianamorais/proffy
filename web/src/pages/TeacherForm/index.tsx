import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(){
  const scheduleItems = [
    { week_day: 0, from: '8:00 AM', to: '4:00 PM' },
    { week_day: 0, from: '8:00 AM', to: '4:00 PM' },
  ]

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Amazing, you want to teach."
        description = "First, fill out the registration form."
      />

      <main>
        <fieldset>
          <legend>Your data</legend>

          <Input name="name" label="Your full name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biography"/>
        </fieldset>

        <fieldset>
          <legend>About the class</legend>

          <Select 
            name="subject" 
            label="Subject"
            options={[
              { value: 'Design', label: 'Design' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Science', label: 'Science' },
              { value: 'Physical education', label: 'Physical education' },
              { value: 'English', label: 'English' },
              { value: 'Programming logic', label: 'Programming logic' },
              { value: 'Marketing', label: 'Marketing' },
              { value: 'Portuguese', label: 'Portuguese' },
              { value: 'History', label: 'History' },
            ]}
          />

          <Input name="cost" label="Cost of your hour per class" />
        </fieldset>

        <fieldset>
          <legend>Available time
            <button type="button">
              + New time
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div className="schedule-item">
                <Select 
                  name="week_day" 
                  label="Day of the week"
                  options={[
                    { value: '0', label: 'Sunday' },
                    { value: '1', label: 'Monday' },
                    { value: '2', label: 'Tuesday' },
                    { value: '3', label: 'Wednesday' },
                    { value: '4', label: 'Thursday' },
                    { value: '5', label: 'Friday' },
                    { value: '6', label: 'Saturday' },
                  ]}
                />
              <Input name="from" label="From" type="time" />
              <Input name="to" label="To" type="time" />
            </div>
            )
          })}
         

        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Important warning"/>
            Important! <br />
            Fill in all the inputs.
          </p>
          <button type="button">
            Save registration
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;