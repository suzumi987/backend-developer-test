--postgresql

-- คณะ
CREATE TABLE faculty (
  faculty_id serial PRIMARY KEY,
  faculty_name varchar(255) NOT NULL,
  faculty_name_eng varchar(255) NOT NULL,
  faculty_description text NOT NULL,
  faculty_created_at timestamp NOT NULL DEFAULT NOW(),
  faculty_updated_at timestamp NOT NULL DEFAULT NOW()
);

-- สาขาวิชา
CREATE TABLE department (
  department_id serial PRIMARY KEY,
  department_name varchar(255) NOT NULL,
  department_name_eng varchar(255) NOT NULL,
  department_description text NOT NULL,
  department_created_at timestamp NOT NULL DEFAULT NOW(),
  department_updated_at timestamp NOT NULL DEFAULT NOW()
);

-- อาจารย์
CREATE TABLE officer (
  officer_id serial PRIMARY KEY,
  faculty_id integer REFERENCES faculty(faculty_id) NOT NULL,
  officer_name varchar(255) NOT NULL,
  officer_surname varchar(255) NOT NULL,
  officer_created_at timestamp NOT NULL DEFAULT NOW(),
  officer_updated_at timestamp NOT NULL DEFAULT NOW()
);

-- วิชาที่เปิดลงทะเบียน
CREATE TABLE course (
  course_id serial PRIMARY KEY,
  course_name varchar(255) NOT NULL,
  course_description varchar(255) NOT NULL UNIQUE,
  course_is_close BOOLEAN NOT NULL DEFAULT false,
  officer_id integer REFERENCES officer(officer_id) NOT NULL,
  course_created_at timestamp NOT NULL DEFAULT NOW(),
  course_updated_at timestamp NOT NULL DEFAULT NOW()
);

-- นักศึกษา
CREATE TABLE student (
  student_id serial PRIMARY KEY,
  faculty_id integer REFERENCES faculty(faculty_id) NOT NULL,
  department_id integer REFERENCES department(department_id) NOT NULL,
  officer_id integer REFERENCES officer(officer_id) NOT NULL,
  student_card_id varchar(255) NOT NULL,
  student_name varchar(255) NOT NULL,
  student_surname varchar(255) NOT NULL,
  student_name_eng varchar(255) NOT NULL,
  student_surname_eng varchar(255) NOT NULL,
  student_email varchar(255) NOT NULL,
  student_graduation_year date DEFAULT NULL,
  student_created_at timestamp NOT NULL DEFAULT NOW(),
  student_updated_at timestamp NOT NULL DEFAULT NOW()
);

-- การลงทะเบียนเรียน
CREATE TABLE enrollments (
  enrollment_id serial PRIMARY KEY,
  student_id integer REFERENCES student(student_id) NOT NULL,
  course_id integer REFERENCES course(course_id) NOT NULL,
  enrollment_approve boolean NOT NULL DEFAULT false,
  enrollment_created_at timestamp NOT NULL DEFAULT NOW(),
  enrollment_updated_at timestamp NOT NULL DEFAULT NOW()
);
