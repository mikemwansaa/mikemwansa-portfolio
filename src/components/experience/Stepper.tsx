import {useState, type RefObject} from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  Fab,
  Paper,
} from '@mui/material'
import {
  ArrowForwardRounded as ArrowForwardIcon,
  ArrowBackRounded as ArrowBackIcon,
  RefreshRounded as RefreshIcon,
} from '@mui/icons-material'

import './Stepper.scss'
import {scrollToView, tPeriodPart} from '#utils/helpers'
import {COMPANY} from '#data/common'
import type {IPeriod} from '#utils/types'

interface IStepperProps {
  sectionRef: RefObject<HTMLElement | null>
}

interface IStep {
  period: IPeriod
  values?: (string | number)[]
}

export default function Stepper({sectionRef}: IStepperProps) {
  const {t} = useTranslation()
  const [step, changeStep] = useState<number>(steps.length - 1)

  const handleNext = () => changeStep(step + 1)

  const handleBack = () => changeStep(step - 1)

  const handleReset = () => {
    changeStep(0)
    scrollToView(sectionRef.current as HTMLElement)
  }

  return (
    <MuiStepper component={Paper} activeStep={step} orientation="vertical">
      {steps.map((item, index) => (
        <Step key={index}>
          <StepLabel>
            <time className="Time">
              {tPeriodPart(t, item.period.from)}
              {item.period.to
                ? ` — ${tPeriodPart(t, item.period.to)}`
                : index === steps.length - 1 && ' — ...'}
            </time>
          </StepLabel>
          <StepContent>
            <p className="Stepper-Text">
              <Trans
                i18nKey={`experience.stepper.step${index + 1}`}
                values={item.values}
                components={transComponents}
              />
              .{index === steps.length - 1 && '..'}
            </p>
            <div className="Stepper-Actions">
              <Fab
                className="Stepper-Button"
                size="medium"
                aria-label={t('experience.next')}
                onClick={handleNext}
              >
                <ArrowForwardIcon className="Stepper-ButtonIcon" />
              </Fab>
              <Fab
                className="Stepper-Button"
                size="medium"
                aria-label={t('experience.back')}
                disabled={step === 0}
                onClick={handleBack}
              >
                <ArrowBackIcon className="Stepper-ButtonIcon" />
              </Fab>
            </div>
          </StepContent>
        </Step>
      ))}
      {step === steps.length && (
        <>
          <p className="Stepper-Text Stepper-Text_last">
            {t('experience.continue')} ✌️...
          </p>
          <Fab
            className="Stepper-Button"
            size="medium"
            aria-label={t('experience.refresh')}
            onClick={handleReset}
          >
            <RefreshIcon className="Stepper-ButtonIcon Stepper-ButtonIcon_refresh" />
          </Fab>
        </>
      )}
    </MuiStepper>
  )
}

const transComponents = [<strong />]

const steps: IStep[] = [
  {
    period: {
      from: {tKey: 'january', year: 2023},
      to: {tKey: 'december', year: 2023},
    },
  },
  {
    period: {
      from: {tKey: 'january', year: 2023},
      to: {tKey: 'december', year: 2024},
    },
    values: [COMPANY.dumela.title],
  },
  {
    period: {
      from: {tKey: 'january', year: 2024},
    },
  },
  {
    period: {
      from: {tKey: 'january', year: 2025},
    },
    values: [COMPANY.unza.title],
  },
  {
    period: {
      from: {tKey: 'january', year: 2025},
    },
    values: [COMPANY.akivara.title],
  },
  {
    period: {
      from: {tKey: 'january', year: 2025},
      to: {tKey: 'august', year: 2025},
    },
    values: ['Agri-Flow AI', 'ZNRAC'],
  },
  {
    period: {
      from: {tKey: 'september', year: 2025},
      to: {tKey: 'march', year: 2026},
    },
    values: ['UniFlow', 'LibertyCon Africa'],
  },
  {
    period: {
      from: {tKey: 'april', year: 2026},
    },
    values: ['ZedShelf', COMPANY.unza.title],
  },
]
