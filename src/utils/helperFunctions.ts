import { TabType } from '@/store/types.ts'

export const getClasses =  (baseClasses: string[], conditionClasses: string[], tab:TabType, activeTab) =>{
  if(activeTab === 'all' || activeTab === tab){
    return [...baseClasses, ...conditionClasses].join(' ')
  }
  return baseClasses.join(' ')
}