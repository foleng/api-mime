enum Status{
  Pending,
  Done,
  Fail,
}


export class CreateProjectDto {
    readonly name: string;
    readonly resource: string;
    readonly createTime: string;
    readonly updateTime: boolean;
    readonly status:Status; 
}
