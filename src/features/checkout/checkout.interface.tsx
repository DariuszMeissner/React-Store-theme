export interface IPropsSteps {
  id: string
  status: { active: boolean; data: boolean }
  activeStep: string | undefined
  setStepStatus: (id: string) => void
  handleEditStep: (id: string, activeStep: string | undefined) => void
  goToNextStep: (id: string) => void
}
