import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import cheerio from 'cheerio'
import axios from 'axios'
import puppeteer from 'puppeteer'

@Injectable()
export class ProjectService {
  
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

  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll() {
    const res =  await this.climbWik(); 
    return `title`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
