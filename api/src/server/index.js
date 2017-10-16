import express from 'express'
import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import reloadable from "express-reloadable"
import setup from "./setup"


const app = express()


if(process.env.NODE_ENV)
