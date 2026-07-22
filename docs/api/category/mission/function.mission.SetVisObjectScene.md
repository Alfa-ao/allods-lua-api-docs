# mission.SetVisObjectScene

Показывает визуальный объект в указанном 3D-контроле.

## Описание

```lua
mission.SetVisObjectScene( index: number, wtControl3D: Control3DSafe, visObjectId: VisObjectId | AliasVisObjectId )
```

Функция отображает визуальный объект или его обвязку внутри заданного 3D-контрола для указанной сцены.

## Список параметров

- **`index`** (`number`) - индекс сцены, от `0` до `GetMaxCharacterSceneCount() - 1`.

- **`wtControl3D`** (`Control3DSafe`) - 3D-контрол, в котором должен отображаться объект.

- **`visObjectId`** (`VisObjectId` | `AliasVisObjectId`) - идентификатор визуального объекта (эффекта) или его обвязки.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отображение визуального объекта в контроле

```lua
mission.SetVisObjectScene(
    CHAR_SCENE_ACHIEVEMENT,
    self.wtControl3D.widget,
    common.GetAddonRelatedVisObject( "VisObjectAlias" )
)
```

::: info Описание примера

В примере выполняется получение связанного визуального объекта по его алиасу и его последующее отображение в 3D-контроле для сцены достижений.

:::