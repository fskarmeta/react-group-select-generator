const { element } = require("prop-types");

const options = [
  {
    label: "Controladores",
    options: [
      {
        value: "Ableton Push 2",
        label: "Ableton Push 2",
        group: "Controladores",
      },
      {
        value: "Akai AMX - Mixing Surface",
        label: "Akai AMX - Mixing Surface",
        group: "Controladores",
      },
      {
        value: "AKAI MPC Live Standalone Sampler and Sequencer",
        label: "AKAI MPC Live Standalone Sampler and Sequencer",
        group: "Controladores",
      },
      {
        value: "AKAI MPD218 Highly Playable Pad Controoler",
        label: "AKAI MPD218 Highly Playable Pad Controoler",
        group: "Controladores",
      },
      {
        value: "AKAI MPK Mini MK2 Keyboards + Pad Controller",
        label: "AKAI MPK Mini MK2 Keyboards + Pad Controller",
        group: "Controladores",
      },
      {
        value: "Arturia BeatStep Controller + Sequencer",
        label: "Arturia BeatStep Controller + Sequencer",
        group: "Controladores",
      },
      {
        value: "Arturia BeatStep Pro Controller + Sequencer",
        label: "Arturia BeatStep Pro Controller + Sequencer",
        group: "Controladores",
      },
      {
        value: "Arturia KeyStep Portable Keyboards + Step Sequencer",
        label: "Arturia KeyStep Portable Keyboards + Step Sequencer",
        group: "Controladores",
      },
      {
        value: "Arturia KeyStep Pro Portable Keyboards + Step Sequencer",
        label: "Arturia KeyStep Pro Portable Keyboards + Step Sequencer",
        group: "Controladores",
      },
      {
        value: "Arturia MiniLab MkII 25 Key Controller",
        label: "Arturia MiniLab MkII 25 Key Controller",
        group: "Controladores",
      },
      {
        value: "Native Instruments Komplete Kontrol A25 Keyboard Controller",
        label: "Native Instruments Komplete Kontrol A25 Keyboard Controller",
        group: "Controladores",
      },
      {
        value: "Native Instruments Komplete Kontrol A49 Keyboard Controller",
        label: "Native Instruments Komplete Kontrol A49 Keyboard Controller",
        group: "Controladores",
      },
      {
        value:
          "Native Instruments Komplete Kontrol M32 Micro-Sized Keyboard Controller",
        label:
          "Native Instruments Komplete Kontrol M32 Micro-Sized Keyboard Controller",
        group: "Controladores",
      },
      {
        value: "Native Instruments Komplete Kontrol S25 Keyboard Controller",
        label: "Native Instruments Komplete Kontrol S25 Keyboard Controller",
        group: "Controladores",
      },
      {
        value:
          "Native Instruments Komplete Kontrol S49 MK2 Keyboard Controller",
        label:
          "Native Instruments Komplete Kontrol S49 MK2 Keyboard Controller",
        group: "Controladores",
      },
      {
        value:
          "Native Instruments Maschine Jam Production And Performance System",
        label:
          "Native Instruments Maschine Jam Production And Performance System",
        group: "Controladores",
      },
      {
        value: "Native Instruments Traktor Kontrol F1",
        label: "Native Instruments Traktor Kontrol F1",
        group: "Controladores",
      },
      {
        value: "Native Instruments Traktor Kontrol S2 MK3 DJ Controller",
        label: "Native Instruments Traktor Kontrol S2 MK3 DJ Controller",
        group: "Controladores",
      },
      {
        value: "Native Instruments Traktor Kontrol S8 DJ Controller",
        label: "Native Instruments Traktor Kontrol S8 DJ Controller",
        group: "Controladores",
      },
      {
        value: "Native Instruments Traktor Kontrol X1 MK2",
        label: "Native Instruments Traktor Kontrol X1 MK2",
        group: "Controladores",
      },
      {
        value:
          "Native Instruments  Traktor Kontrol Z1 DJ Mixer / Controller / Interface",
        label:
          "Native Instruments  Traktor Kontrol Z1 DJ Mixer / Controller / Interface",
        group: "Controladores",
      },
      {
        value: "Numark Mixtrack Platinum FX 4-Deck DJ Controller",
        label: "Numark Mixtrack Platinum FX 4-Deck DJ Controller",
        group: "Controladores",
      },
      {
        value: "Pioneer DDJ-1000 Pro DJ Controller ",
        label: "Pioneer DDJ-1000 Pro DJ Controller ",
        group: "Controladores",
      },
      {
        value: "Pioneer  DDJ-SR2 Performance DJ Controller",
        label: "Pioneer  DDJ-SR2 Performance DJ Controller",
        group: "Controladores",
      },
      {
        value: "Pioneer  DDJ-SX2 Performance DJ Controller for Serato",
        label: "Pioneer  DDJ-SX2 Performance DJ Controller for Serato",
        group: "Controladores",
      },
      {
        value: "Pioneer  DDJ-SX3 Performance DJ Controller (Serato DJ)",
        label: "Pioneer  DDJ-SX3 Performance DJ Controller (Serato DJ)",
        group: "Controladores",
      },
      {
        value: "Pioneer  DDJ-XP1 Controller For Rekordbox",
        label: "Pioneer  DDJ-XP1 Controller For Rekordbox",
        group: "Controladores",
      },
      {
        value: "DDJ-XP2 Add-On Controller for Rekordbox DJ + Serato DJ Pro",
        label: "DDJ-XP2 Add-On Controller for Rekordbox DJ + Serato DJ Pro",
        group: "Controladores",
      },
      {
        value: "Rane  Twelve MKII Motorized Turntable DJ Controller",
        label: "Rane  Twelve MKII Motorized Turntable DJ Controller",
        group: "Controladores",
      },
      {
        value: "Roland  A-300PRO-R MIDI Keyboard Controller",
        label: "Roland  A-300PRO-R MIDI Keyboard Controller",
        group: "Controladores",
      },
      {
        value: "Roland  DJ-202 DJ Controller w/Serato Pro",
        label: "Roland  DJ-202 DJ Controller w/Serato Pro",
        group: "Controladores",
      },
      {
        value: "Roland  DJ-505 DJ Controller",
        label: "Roland  DJ-505 DJ Controller",
        group: "Controladores",
      },
      {
        value: "Roland  DJ-707M DJ Controller (Serato)",
        label: "Roland  DJ-707M DJ Controller (Serato)",
        group: "Controladores",
      },
      {
        value: "Roland  DJ-808 DJ Controller",
        label: "Roland  DJ-808 DJ Controller",
        group: "Controladores",
      },
      {
        value: "Teenage Engineering  OP-1 Portable Synthesizer",
        label: "Teenage Engineering  OP-1 Portable Synthesizer",
        group: "Controladores",
      },
    ],
  },
  {
    label: "Mixer",
    options: [
      { value: "4 entradas", label: "4 entradas", group: "Mixer" },
      { value: "8 entradas", label: "8 entradas", group: "Mixer" },
    ],
  },
];

let newOptions = [];
for (let element of options) {
  let newObj = { value: element.label, label: element.label };
  if (!newOptions.some((el) => el.value === newObj.value)) {
    newOptions.push(newObj);
  }
}
console.log(newOptions);
