import {forwardRef} from 'react'
import {Dialog, IconButton, Button, Slide} from '@mui/material'
import {
  CloseRounded as CloseIcon,
  OpenInNewRounded as OpenInNewIcon,
  DownloadRounded as DownloadIcon,
} from '@mui/icons-material'
import type {TransitionProps} from '@mui/material/transitions'

import './ResumeViewer.scss'

export const RESUME_URL = '/resume.pdf'

interface IResumeViewerProps {
  open: boolean
  onClose: () => void
}

export default function ResumeViewer({open, onClose}: IResumeViewerProps) {
  return (
    <Dialog
      fullScreen
      open={open}
      scroll="paper"
      slots={{transition: Transition}}
      slotProps={{paper: {className: 'ResumeViewer'}}}
      onClose={onClose}
      aria-labelledby="resume-viewer-title"
    >
      <div className="ResumeViewer-Bar">
        <h2 id="resume-viewer-title" className="ResumeViewer-Title">
          Resume
        </h2>
        <div className="ResumeViewer-Actions">
          <Button
            className="ResumeViewer-Action"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
          >
            Open in new tab
          </Button>
          <Button
            className="ResumeViewer-Action"
            href={RESUME_URL}
            download
            startIcon={<DownloadIcon />}
          >
            Download
          </Button>
          <IconButton aria-label="Close resume" onClick={onClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <object
        className="ResumeViewer-Frame"
        data={`${RESUME_URL}#view=FitH`}
        type="application/pdf"
        aria-label="Resume"
      >
        <div className="ResumeViewer-Fallback">
          <p>Your browser can't show the resume here.</p>
          <Button
            variant="outlined"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
          >
            Open in new tab
          </Button>
        </div>
      </object>
    </Dialog>
  )
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {children: React.ReactElement<any, any>},
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
