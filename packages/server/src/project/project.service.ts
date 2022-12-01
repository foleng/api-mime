import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import cheerio from 'cheerio'
import axios from 'axios'

@Injectable()
export class ProjectService {

  url = "https://gitlab.tangees.com/estate-backend/estate/-/wikis/apps.api.industryoverview"

  async climbWik() {
    try {
      const res = await axios.get(this.url, {
        withCredentials: true,
        responseType: 'document',
        headers: {
          Cookie: 'CGISessionId=eyJzaWQiOiJPVGt6WkRRNFpUY3RPRE13TlMwME1XUmlMVGxsWkRZdE5ERXpaamcwT1RBMU5UZGwiLCJjaGFubmVsIjoid2ViIiwiX2ZyZXNoIjpmYWxzZSwiX3VzZXJfaWQiOiI2MzdlMDcyZWU1NzJmMDJhM2VjNTcxMmQifQ.Y34IEA.-8lz5zJ7pYysR6Q0auk1THROIiY; event_filter=all; sidebar_collapsed=false; visitor_id=81dd8c20-b46f-4dd2-97a9-f9c53cd83a3f; known_sign_in=UDVCSjJpVTNuMldDelIvUEkxeFpIQjNZeFJiUjdFenZaTWtXb0dTWFdUZ2lLRW9XOUJxanBrRHRMZG5xZVFybXhjcGRQWEFLY0xYMWtGR3YvVUZoYWJoaHZZZVhNdkUyd3NDaWhrRFQ1WG92eDRTRmhBOThlbnhJY3o3aVVKQ3MtLTlIaUpnYjVxUTZ4TFN1QVE5ZGxmYXc9PQ==--2fc3255d0ff961d4bed11b711d1c9605ed25fda7; _gitlab_session=82cc12dbabef49ff4768c5ba8386c23c; diff_whitespace=0; SecurityCenterDuId=IllEOTVsSllFMnh4UmcwSVdGbWtYU1ZnPSI.FmhlQQ.97-IMAcirqLvZIglQvBqE2j7R-E; remember_token=6386d3c1e572f0629feea870|3fac95a3c8e35b6696a13ecec133d94ab74f6af3f981419003375d39dd5e853424e8102a2229e164c4a538872fd993b4b958d43ec08a0cb3b58d562ea6b3f45b; __last_enter_version=sales-test; marketingSessionId=eyJ1c2VyX2lkIjoiNjM4NmQzYzFlNTcyZjA2MjlmZWVhODcwIiwiX2ZyZXNoIjpmYWxzZX0.Y4cPXw.PLMSYxizVmv29FkQrOFp6eH_CtY; _co_i=636ba197e572f07d722a6cc2; accountCenterSessionId=.eJw9jk1rwzAQRP-Lzj1oJa-0zi0UJ5fWpWAo9sVopV2SkKQQpx-k9L9X5NDbDMwb3o85i5R5SZ8yX9_nwmal6bjIg5n1Isvuv34scpn3xaxM8BSKzyAYndrgWhVJFK2pzH2Q2ZFnzgjqQ2mxRmiTRyoW2gJByLoAEmNwJISFnWIdEWb1Huu1ApIie22YIIlLEZpgmYPLll1RiihtcAXIqzpuwEYJHrLmXBriKrLcRV6G7tbfMo6H8ToNa5gerX0e1v7prYPp1F37w_q7377itO3ceNrsK5h36XyWY4W_hM3vH35-VRs.FmjhMg.r_qvUzAtUL_fbq9z8ygQf5zZRNk',
          'Content-Type': 'application/json'
        },
      })
      return res
    } catch (error) {

    }
  }

  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll() {
    const res =  await this.climbWik(); 
    const $ = cheerio.load(res.data);
    const title = $("#user-content-api-3-区域概览-历史企业总量及其增长率").html();
    console.log(title);
    
    return title;
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
