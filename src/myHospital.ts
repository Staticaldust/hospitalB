abstract class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    abstract showDetails(): any;
  }

  class Patient extends Person {
    patientId: string;

    constructor(firstName: string, lastName: string, patientId: string) {
      super(firstName, lastName);
      this.patientId = patientId;
    }
    private showMyDetails() {
      console.log(`Dear patient, here are your details:`, this);
    }
    showDetails() {
      this.showMyDetails();
    }
  }
  class Doctor extends Person {
    doctorId: string;
    specialization: string;

    constructor(
      firstName: string,
      lastName: string,
      doctorId: string,
      specialization: string
    ) {
      super(firstName, lastName);
      this.firstName = firstName;
      this.lastName = lastName;
      this.doctorId = doctorId;
      this.specialization = specialization;
    }
    private showMyDetails() {
      console.log(`Dear doctor, here are your details:`, this);
    }
    showDetails() {
      this.showMyDetails;
    }
  }

  class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;

    constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
      this.patient = patient;
      this.doctor = doctor;
      this.date = date;
      this.time = time;
    }

    showTurnDetails() {
      console.log(`Dear Department manager, here are your details:`, this);
    }
  }
  class Hospital {
    name: string;
    patientsArray: Patient[];
    doctorsArray: Doctor[];
    turnsArray: Appointment[];

    constructor(
      name: string,
      patientsArray: Patient[],
      doctorsArray: Doctor[],
      turnsArray: Appointment[]
    ) {
      this.name = name;
      this.patientsArray = patientsArray;
      this.doctorsArray = doctorsArray;
      this.turnsArray = turnsArray;
    }

    addingPatient(arg: Patient) {
      this.patientsArray.push();
    }
    addingDoctor(arg: Doctor) {
      this.patientsArray.push();
    }
    addingturn(arg: Appointment) {
      this.turnsArray.push();
    }
    showTurnsDetails() {
      console.log(this.turnsArray);
    }
    showByDRID(id: string) {
      for (let i = 0; i < this.turnsArray.length; i++) {
        if (this.turnsArray[i].doctor.doctorId == id) {
          console.log(this.turnsArray[i].date, this.turnsArray[i].time);
          break;
        }
      }
    }
    showByPatientID(id: string) {
      for (let i = 0; i < this.turnsArray.length; i++) {
        if (this.turnsArray[i].patient.patientId == id) {
          console.log(this.turnsArray[i].date, this.turnsArray[i].time);
          break;
        }
      }
    }
    addDR(doc: Doctor) {
      this.doctorsArray.push(doc);
      console.log(this.doctorsArray);
    }
    addPatient(pat: Patient) {
      this.patientsArray.push(pat);
      console.log(this.patientsArray);
    }
    addTurns(turn: Appointment) {
      this.turnsArray.push(turn);
      console.log(this.turnsArray);
    }
  }

  const patient1 = new Patient("ari", "dvi", "P12345");
  const patient2 = new Patient("mosh", "rot", "P67890");
  const patient3 = new Patient("or", "dev", "P24870");
  const doctor1 = new Doctor("doc_avi", "tdi", "D98765", "surgical");
  const doctor2 = new Doctor("doc_ben", "yos", "D54321", "orthopedics");
  const doctor3 = new Doctor("doc_david", "git", "D98321", "parturient");
  const appointment1 = new Appointment(patient1, doctor1, "2023-09-01", "10:00");
  const appointment2 = new Appointment(patient2, doctor2, "2023-27-08", "15:30");
  const patientRecords = [patient1, patient2];
  const doctors = [doctor1, doctor2];
  const appointments = [appointment1, appointment2];
  const hospital = new Hospital(
    "Hadassah",
    patientRecords,
    doctors,
    appointments
  );
  hospital.addingPatient(patient3);
  hospital.addingDoctor(doctor3);
  const newAppointments = new Appointment(
    patient3,
    doctor3,
    "2023-27-08",
    "12:30"
  );
  hospital.addingturn(newAppointments);
  hospital.showTurnsDetails();
  hospital.showByDRID("D54321");
  hospital.showByPatientID("P12345");

  const patient11 = new Patient("Zion", "Baruch", "315179");
  const patient12 = new Patient("Asi", "Israelof", "315168");
  const patient13 = new Patient("Shalom", "Michaelshvilly", "315100");
  const doctor11 = new Doctor("Tomer", "kapoon", "20678", "orthopedics");
  const doctor12 = new Doctor("Daniel", "Gal", "20694", "geriatrics");
  const doctor13 = new Doctor("Oz", "Zehavy", "20631", "psychiatry");
  const appo11 = new Appointment(patient11, doctor11, "11-08-2024", "11:00");
  const appo12 = new Appointment(patient12, doctor12, "12-09-2024", "12:15");
  const appo13 = new Appointment(patient13, doctor13, "13-10-2024", "13:45");
  const patientArr = [patient11, patient12, patient13];
  const doctorArr = [doctor11, doctor12, doctor13];

  const AppointmentArr = [appo11, appo12, appo13];
  const hospital2 = new Hospital("Shibba", patientArr, doctorArr, AppointmentArr);
  hospital2.showByPatientID("315100");
  hospital2.addDR(doctor11);
  hospital2.addPatient(patient11);
  hospital2.addTurns(appo11);
  patient1.showDetails();
  doctor1.showDetails();

