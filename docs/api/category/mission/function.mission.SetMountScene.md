# mission.SetMountScene
Отображает маунта главного игрока в указанном 3D-контроле.

## Описание
```lua
mission.SetMountScene( index: number, wtCharacterControl3D: Control3DSafe, mountSkinId: ObjectId )
```
Функция отображает маунта главного игрока в заданном 3D-контроле.

## Список параметров

- **`index`** (`number`) - индекс сцены, от 0 до `GetMaxCharacterSceneCount() - 1`.

- **`wtCharacterControl3D`** (`Control3DSafe`) - 3D-контрол, в котором должен отображаться персонаж.

- **`mountSkinId`** (`ObjectId`) - идентификатор отображаемого скина маунта главного игрока.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Отображение маунта и настройка сцены
```lua
mission.SetMountScene( 0, wtCharacterView, mountSkinId )
mission.SetCharacterSceneScaleFactor( 0, 0.5 )
mission.SetCharacterSceneSmoothRotation( 0, false )
```

::: info Описание примера
В примере производится отображение маунта в 3D-контроле с индексом 0, после чего устанавливается коэффициент масштабирования и отключается плавное вращение сцены.
:::

## Смотрите также
- [mission.SetCharacterScene](function.mission.SetCharacterScene)
- [mission.SetCharacterSceneSmoothRotation](function.mission.SetCharacterSceneSmoothRotation)