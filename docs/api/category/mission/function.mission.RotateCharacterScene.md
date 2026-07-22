# mission.RotateCharacterScene

Поворачивает персонажа в указанной сцене.

## Описание

```lua
mission.RotateCharacterScene( index: number, angle: number )
```

Функция поворачивает персонажа в указанной сцене на заданный угол, выраженный в радианах.

## Список параметров

- **`index`** (`number`) - Индекс сцены. Допустимый диапазон: от `0` до `GetMaxCharacterSceneCount() - 1`.

- **`angle`** (`number`) - Угол поворота в радианах.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Поворот персонажа в сцене

```lua
mission.RotateCharacterScene( 0, 20 )
```

## Смотрите также

- [mission.GetMaxCharacterSceneCount](function.mission.GetMaxCharacterSceneCount)