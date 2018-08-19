export class LoggerService {
    private log(msg: string, data: {}): void {
        console.log(msg, data);
    }

    private simpleLog(msg: String){
        console.log(msg);
    }

    private logNote = (note) => {
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    };

    private error(msg: string, obj: {}): void {
        console.error(msg, obj);
    }

    public get getLogResultData() {
        return this.log;
    }

    public get getLogResult(){
        return this.simpleLog;
    }

    public get getLogNote() {
        return this.logNote;
    }

    public get getError(){
        return this.error;
    }

    
}
