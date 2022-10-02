import React from 'react'
import { getScorpMetadata } from './scorp-data'
import { scropEasterEgg, deltaE, hexToRgb } from './util'

const allScorpIds: string[] = []
for (let i = 0; i < 10000; i++) {
  let sid = i.toString()

  while (sid.length !== 4) {
    sid = '0' + sid
  }

  allScorpIds.push(sid)
}

export function passesFilters(id: string, props: FilteredScorpionsProps): boolean {
  let passFilter = true
  const attributes: any = getScorpMetadata(id).attributes
  const colors: any = getScorpMetadata(id).colors

  if (passFilter && props.otherFilters.mono) {
    passFilter =
      colors.bg2_color === colors.body_color && attributes.bg_style === 'blank' && attributes.multicolored === false
  }

  if (passFilter && props.otherFilters.psuedoMono) {
    const body_color = hexToRgb(colors.body_color)
    const bg2_color = hexToRgb(colors.bg2_color)

    const colorDistance = deltaE(body_color, bg2_color)

    passFilter =
      attributes.bg_style === 'blank' &&
      attributes.multicolored === false &&
      colorDistance < props.otherFilters.psuedoMonoTolerance &&
      colorDistance !== 0
  }

  if (passFilter && props.otherFilters.bodyEqBg2) {
    passFilter = colors.body_color === colors.bg2_color
  }
  if (passFilter && props.otherFilters.secondaryEqBg2) {
    passFilter = attributes.multicolored && colors.secondary_color === colors.bg2_color
  }
  if (passFilter && props.otherFilters.secondaryEqBg) {
    passFilter =
      attributes.multicolored && colors.secondary_color === colors.bg_color && attributes.bg_style !== 'blank'
  }
  if (passFilter && props.otherFilters.eyeEqBg2) {
    passFilter = colors.eye_color === colors.bg2_color
  }
  if (passFilter && props.otherFilters.eyeEqBg) {
    passFilter = colors.eye_color === colors.bg_color
  }
  if (passFilter && props.otherFilters.woooptyFilter) {
    const body_color = hexToRgb(colors.body_color)
    const outline_color = hexToRgb(colors.outline_color)
    const bg2_color = hexToRgb(colors.bg2_color)
    const bg_color = hexToRgb(colors.bg_color)

    const bodyOutLineColorDistance = deltaE(body_color, outline_color)
    const backgroundBodyColorDistance = Math.min(deltaE(body_color, bg2_color), deltaE(body_color, bg_color))
    passFilter =
      attributes.outline_type !== 'black' &&
      attributes.outline_type !== 'white' &&
      (bodyOutLineColorDistance < 15 ||
        (backgroundBodyColorDistance < 20 && bodyOutLineColorDistance < 40) ||
        (backgroundBodyColorDistance < 25 && bodyOutLineColorDistance < 30))
  }

  if (passFilter) {
    for (const traitName of Object.keys(attributes)) {
      if (!props.scorpionFilters[traitName] || props.scorpionFilters[traitName].size === 0) {
        continue
      }

      if (props.scorpionFilters[traitName].has(attributes[traitName].toString())) {
        continue
      } else {
        passFilter = false
        break
      }
    }
  }

  return passFilter
}

export type FilteredScorpionsProps = {
  scorpionFilters: { [attName: string]: Set<string> }
  otherFilters: {
    mono: boolean
    psuedoMono: boolean
    psuedoMonoTolerance: number
    bodyEqBg2: boolean
    secondaryEqBg2: boolean
    secondaryEqBg: boolean
    eyeEqBg2: boolean
    eyeEqBg: boolean
    woooptyFilter: boolean
  }
}

export function FilteredScorpions(props: FilteredScorpionsProps): React.ReactElement {
  let scorpions = []

  for (const id of allScorpIds) {
    if (passesFilters(id, props)) {
      scorpions.push(
        <a
          key={id}
          className="filtered-scorpions-a"
          href={`https://radstrike.com/scorpions/info/?number=${id}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="filtered-scorpions-div" style={{ backgroundImage: `url(/img/${id}_large.png)` }}></div>
        </a>
      )
    }
  }

  const msg =
    scorpions.length === 0 ? (
      <div>There are no scorpions with these filters… maybe you should be less selective. </div>
    ) : scorpions.length === 1 ? (
      <div>
        <a
          style={{
            color: 'white',
          }}
          target="_blank"
          rel="norefferer noreferrer"
          href="https://www.radixscan.io/token/cmon_rr1qvfpshnlfa8heujaqyxsv2w4ygudaz4acksgew26nqeswa57an"
        >
          Lol a blue chip? An nft which is one of 10000 pixelated scorpions in a network that hasn’t proved itself? I’m
          insanely bullish in Radix, but c’mon.
        </a>
      </div>
    ) : scorpions.length === 2 ? (
      <div>There are only TWO scorpions with these specific filters… what a perfect pairing! </div>
    ) : (
      <div>
        There are {scorpions.length < 100 && 'only'} {scorpions.length} {scropEasterEgg('scorpion')}s with these filters
        {scorpions.length < 50 ? '!' : '.'}
        {scorpions.length < 5 ? '!!' : ''} {scorpions.length === 10000 && "(cause you have no filters, c'mon)"}
      </div>
    )

  return (
    <div className="filtered-scorpions">
      {msg}
      <div className="filtered-scorpions-grid">{scorpions}</div>
    </div>
  )
}
