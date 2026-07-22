# mission.SetGuildBossScene

Отображает босса гильдии главного игрока в указанном 3D-контроле.

## Описание

```lua
mission.SetGuildBossScene( index: number, wtCharacterControl3D: Control3DSafe, bossIndex: number | nil, stateIndex: number | nil )
```

Дополнительно обеспечивает возможность предпросмотра боссов при выборе босса для гильдии при указании параметров `bossIndex` и `stateIndex`.

## Список параметров

- **`index`** (`number`) - Индекс сцены, `[0..GetMaxCharacterSceneCount() - 1]`.

- **`wtCharacterControl3D`** (`Control3DSafe`) - Контрол, в котором должен отображаться босс.

- **`bossIndex`** (`number` | `nil`) - Необязательный параметр. Индекс босса, полученный из `guildBossLib.GetVariations()`.

- **`stateIndex`** (`number` | `nil`) - Необязательный параметр. Индекс состояния босса, полученный из `guildBossLib.GetVariations()` (список `previewStates`).

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отображение босса с настройками сцены

```lua
mission.SetGuildBossScene( 0, wtCharacterView )
mission.SetCharacterSceneScaleFactor( 0, 0.5 )
mission.SetCharacterSceneSmoothRotation( 0, false )
```

::: info Описание примера
В примере выполняется отображение босса гильдии в указанном контроле с применением масштабирования и отключением плавного вращения сцены.
:::

## Смотрите также

- [guildBossLib.GetVariations()](../guildBossLib/function.guildBossLib.GetVariations)