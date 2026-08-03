# mission.SetCharacterScene

Отображает указанного персонажа в заданном трехмерном контроле.

## Описание

```lua
mission.SetCharacterScene( index: number, wtCharacterControl3D: Control3DSafe, unitId: ObjectId | nil )
```

Функция создает сцену для показа персонажа в указанном трехмерном контроле. Количество допустимых сцен ограничено, для выбора конкретной сцены используется параметр `index` в диапазоне от `0` до `GetMaxCharacterSceneCount() - 1`. Для идентификации имеющихся окон используется вспомогательное перечисление `CHAR_SCENE_*`.

::: info Перечисление
- `CHAR_SCENE_CHARACTER`
- `CHAR_SCENE_ITEMMALL`
- `CHAR_SCENE_INSPECT`
- `CHAR_SCENE_MOUNT`
- `CHAR_SCENE_CHECKROOM`
- `CHAR_SCENE_FITTING`
- `CHAR_SCENE_ACHIEVEMENT`
- `CHAR_SCENE_GUILD_BOSS`
:::

## Список параметров

- **`index`** (`number`) - Индекс сцены в диапазоне от `0` до `GetMaxCharacterSceneCount() - 1`.

- **`wtCharacterControl3D`** (`Control3DSafe`) - Трехмерный контрол, в котором отображается персонаж.

- **`unitId`** (`ObjectId` | `nil`) - Идентификатор отображаемого юнита. Передача значения `nil` приводит к очистке сцены.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовое использование с числовым индексом

```lua
mission.SetCharacterScene( 0, wtCharacterControl3D, unitId )
```

### Использование с константами перечисления

```lua
mission.SetCharacterScene( CHAR_SCENE_CHARACTER, wtCharacterControl3D, unitId )
```