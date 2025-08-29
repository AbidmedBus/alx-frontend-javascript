# ALX Frontend JavaScript - TypeScript Projects

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)

## 📋 Table of Contents

- [About](#-about)
- [Learning Objectives](#-learning-objectives)
- [Project Structure](#-project-structure)
- [Requirements](#-requirements)
- [Setup and Installation](#-setup-and-installation)
- [Tasks Overview](#-tasks-overview)
- [Usage](#-🎮-usage)
- [Technologies Used](#-technologies-used)
- [Author](#-author)

## 🎯 About

This repository contains a comprehensive collection of TypeScript projects developed as part of the ALX Software Engineering Program. The projects demonstrate progressive learning of TypeScript concepts, from basic interfaces and types to advanced features like namespaces, declaration merging, and ambient modules.

Each task builds upon previous concepts while introducing new TypeScript features, providing a structured learning path for mastering TypeScript development.

## 🎓 Learning Objectives

By completing these projects, you will learn:

- **Basic Types in TypeScript**: Understanding primitive types, interfaces, and type annotations
- **Interfaces**: Creating and implementing interfaces, optional properties, readonly properties
- **Classes**: TypeScript classes, inheritance, access modifiers, and method implementations
- **Functions**: Function types, overloads, and type guards
- **Generic Types**: Working with generic constraints and type parameters
- **Namespaces**: Organizing code using namespaces and modules
- **Declaration Merging**: Extending interfaces and merging declarations
- **Ambient Modules**: Working with external libraries and declaration files
- **Nominal Typing**: Using brands for nominal typing in TypeScript
- **Webpack Integration**: Bundling TypeScript applications with Webpack

## 📁 Project Structure

```
0x04-TypeScript/
├── task_0/           # Basic interfaces and DOM manipulation
├── task_1/           # Interface extension and optional properties
├── task_2/           # Classes, inheritance, and function overloads
├── task_3/           # Ambient modules and external libraries
├── task_4/           # Namespaces and declaration merging
└── task_5/           # Nominal typing with brands
```

## 📋 Requirements

### General

- **Allowed editors**: vi, vim, emacs, Visual Studio Code
- **Operating System**: Ubuntu 18.04 LTS
- **TypeScript Version**: 3.6.4
- **File Extensions**: All files should end with a new line
- **Code Quality**: All files will be transpiled on Ubuntu 18.04
- **Error Handling**: No TypeScript compilation errors
- **Testing**: Code will be verified with Jest (when applicable)

### Technical Requirements

- TypeScript configuration must be strict
- Webpack configuration for bundling and development server
- ESLint for code quality enforcement
- Jest for testing (where applicable)

## 🚀 Setup and Installation

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/kimoban/alx-frontend-javascript.git
   cd alx-frontend-javascript/0x04-TypeScript
   ```

2. **Navigate to a specific task** (e.g., task_0)

   ```bash
   cd task_0
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**

   ```bash
   npm run start-dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Run tests** (if available)

   ```bash
   npm test
   ```

## 📚 Tasks Overview

### Task 0: Creating an Interface for a Student

**File**: `task_0/js/main.ts`

- Create a `Student` interface with firstName, lastName, age, and location
- Implement student objects and render them in an HTML table
- **Key Concepts**: Basic interfaces, DOM manipulation, TypeScript compilation

### Task 1: Let's Build a Teacher Interface

**File**: `task_1/js/main.ts`

- Build a `Teacher` interface with readonly properties and optional fields
- Implement interface extension with `Directors`
- **Key Concepts**: Readonly properties, optional properties, interface extension

### Task 2: Extending the Teacher Class

**File**: `task_2/js/main.ts`

- Create classes implementing interfaces (`Director` and `Teacher`)
- Implement function overloads and type guards
- Use string literal types for function parameters
- **Key Concepts**: Classes, implements keyword, type guards, string literal types

### Task 3: Ambient Modules

**Files**: `task_3/js/interface.ts`, `task_3/js/main.ts`, `task_3/js/crud.d.ts`

- Work with ambient modules and external JavaScript libraries
- Create type definitions for external modules
- **Key Concepts**: Ambient modules, declaration files, external library integration

### Task 4: Namespace & Declaration Merging

**Files**: `task_4/js/subjects/`

- Organize code using namespaces
- Implement declaration merging to extend interfaces
- Create subject-specific classes (Cpp, Java, React)
- **Key Concepts**: Namespaces, declaration merging, module organization

### Task 5: Brand Convention & Nominal Typing

**File**: `task_5/js/main.ts`

- Implement nominal typing using brand properties
- Create functions that work with branded types
- **Key Concepts**: Nominal typing, branded types, type safety

## 🎮 Usage

### Development Workflow

1. **Start a development server** for any task:

   ```bash
   cd task_X  # Replace X with task number
   npm run start-dev
   ```

2. **Access the application** in your browser at `http://localhost:8080`

3. **View TypeScript compilation** in real-time with webpack-dev-server

4. **Build for production**:

   ```bash
   npm run build
   ```

### Code Examples

#### Basic Interface Usage (Task 0)

```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Accra"
};
```

#### Class Implementation (Task 2)

```typescript
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
```

#### Namespace Usage (Task 4)

```typescript
namespace Subjects {
  export class Subject {
    teacher: Teacher;
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
```

## 🛠 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **TypeScript** | ^3.6.4 | Primary programming language |
| **Webpack** | ^4.41.2 | Module bundling and development server |
| **Jest** | ^24.9.0 | Testing framework |
| **ESLint** | ^2.4.0 | Code linting and quality |
| **Babel** | ^7.5.2 | JavaScript transpilation |
| **HTML Webpack Plugin** | ^3.2.0 | HTML template generation |

### Development Dependencies

- **ts-loader**: TypeScript loader for Webpack
- **fork-ts-checker-webpack-plugin**: Type checking in separate process
- **clean-webpack-plugin**: Clean dist folder before builds
- **webpack-dev-server**: Development server with hot reload

## 📝 Key Features

- ✅ **Strict TypeScript Configuration**: Enforces type safety and best practices
- ✅ **Webpack Integration**: Modern build tooling with development server
- ✅ **Hot Module Replacement**: Fast development with live reloading
- ✅ **ESLint Integration**: Consistent code style and error prevention
- ✅ **Source Maps**: Enhanced debugging experience
- ✅ **Jest Testing**: Unit testing capabilities
- ✅ **Progressive Learning**: Each task builds upon previous concepts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a new Pull Request

## 📄 License

This project is part of the ALX Software Engineering Program curriculum.

## 👨‍💻 Author

### Isaiah Kimoban

- GitHub: [@kimoban](https://github.com/kimoban)
- Email:

## 🔗 Related Projects

- [0x00-ES6_basic](../0x00-ES6_basic/) - ES6 Basics
- [0x01-ES6_promise](../0x01-ES6_promise/) - ES6 Promises
- [0x02-ES6_classes](../0x02-ES6_classes/) - ES6 Classes
- [0x03-ES6_data_manipulation](../0x03-ES6_data_manipulation/) - ES6 Data Manipulation

*This repository is part of the ALX Software Engineering Program's Frontend JavaScript specialization track.*
