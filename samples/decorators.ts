// FUNCTION DECORATORS
enum LoggingLevel {
  INFO,
  WARN,
  DEBUG,
  TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

function LogMethod(level: LoggingLevel): Function {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction: Function = descriptor.value;

    descriptor.value = function(...args: any[]) {
      if (level <= loggingLevel) {
        console.log(`>> ${propertyKey} ${JSON.stringify(args)}`);
      }

      originalFunction.apply(this, args);
    };
  };
}

class Database {
  name = 'CTCDB';

  @LogMethod(LoggingLevel.DEBUG)
  saveData(data: any) {}
}

const db = new Database();

db.saveData({ message: 'hello ' });

// CLASS DECORATORS
function registerOrmModel(model: Function) {
  console.log('registering ORM model', model);
}

function Entity(tableName: string) {
  return (target: Function) => {
    registerOrmModel(target);
  };
}

@Entity('TODOS')
class Todo {
  @Column('DESC')
  description: string;
  done = false;
}

// PROPERTY DECORATORS
function Column(columnName: string) {
  return (target: any, propertyKey: string) => {
    console.log(target, propertyKey);
  };
}
