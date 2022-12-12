import { Injectable } from '@nestjs/common';
import mongoose, { Model, Types } from 'mongoose'
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import cheerio from 'cheerio'
import axios from 'axios'
import puppeteer from 'puppeteer'
import { InjectModel } from "@nestjs/mongoose";
import { Project, ProjectDocument } from "./project.schema";


@Injectable()
export class ProjectService {

  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>){}
  
  loginUrl = "//gitlab.tangees.com/users/sign_in"
  url = "https://gitlab.tangees.com/estate-backend/estate/-/wikis/apps.api.industryoverview"

  async climbWik() {
  const borwer = await puppeteer.launch({executablePath:'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', headless: false})  
  const page = await borwer.newPage()
  const content  = await page.goto("https://gitlab.tangees.com/estate-backend/estate/-/wikis/apps.api.industryoverview")
  const currentUrl = page.target().url()
  if(currentUrl.includes(this.loginUrl)){
    page.goto("http://127.0.0.1:5173/login/gitlab")
   }
  }

  async create(createProjectDto: CreateProjectDto) {
    console.log(createProjectDto);
    const createProject = new this.projectModel(createProjectDto)
    return await createProject.save();
  }

  async findAll(params) {
    console.log(params);
    
    return this.projectModel.find(params).exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: string) {
    return this.projectModel.deleteOne({id})
  }
}
