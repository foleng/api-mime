import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  // @Prop()
  // _id: string
  
  @Prop()
  name: string

  @Prop()
  resource: 'gitlab|github';

  @Prop()
  createTime: number

  @Prop()
  updateTime: number
}

export const ProjectSchema = SchemaFactory.createForClass(Project);