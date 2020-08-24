import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffys.">
        <form id="search-teachers">
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
          <Input type="time" name="time" label="Time"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;