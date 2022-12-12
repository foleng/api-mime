
import request from '../../utils/request'

export const getProjects = (params) => {
  return request.get("/project", {params})
}

export const createProject = (data) => {
  return request.post("/project", {data})
}

export const deleteProject = (projectId) => {
  return request.delete(`/project/${projectId}`)
}