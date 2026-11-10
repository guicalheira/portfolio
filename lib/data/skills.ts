// ============================================
// Stack organizada pelas camadas de um produto
// ============================================

export type LayerKey = 'languages' | 'frontend' | 'backend' | 'data' | 'tools'

export interface StackLayer {
  key: LayerKey
  items: string[]
}

export const stackLayers: StackLayer[] = [
  { key: 'frontend', items: ['React', 'Next.js', 'Vue.js', 'HTML & CSS'] },
  { key: 'backend', items: ['Node.js', 'Express'] },
  { key: 'data', items: ['MySQL', 'Firebase', 'Firestore'] },
  { key: 'languages', items: ['JavaScript', 'Python', 'Java', 'C#'] },
  { key: 'tools', items: ['Git', 'GitHub'] },
]
