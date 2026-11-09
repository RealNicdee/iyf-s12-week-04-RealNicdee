// ============================================
// Student Grade Tracker
// ============================================

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const gradeValues = Object.values(student.grades);
        const sum = gradeValues.reduce((total, grade) => total + grade, 0);
        return Number((sum / gradeValues.length).toFixed(2));
    },

    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        for (const student of this.students) {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        }

        if (count === 0) return null;
        return Number((total / count).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) return null;

        let topStudent = this.students[0];
        let highestAvg = this.getStudentAverage(topStudent.name);

        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAvg) {
                highestAvg = avg;
                topStudent = student;
            }
        }

        return topStudent.name;
    },

    getStrugglingStudents() {
        return this.students.filter(student => {
            const avg = this.getStudentAverage(student.name);
            return avg < 70;
        });
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const average = this.getStudentAverage(name);
        const letter = this.getLetterGrade(average);

        let report = `Report Card for ${name}\n`;
        report += "------------------------\n";

        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade}\n`;
        }

        report += `Average: ${average} (${letter})\n`;
        return report;
    }
};

// Required tests (must print the expected values)
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie object]
console.log(gradeTracker.generateReportCard("Alice"))