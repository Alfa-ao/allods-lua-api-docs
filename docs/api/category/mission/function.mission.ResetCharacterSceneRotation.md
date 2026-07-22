# mission.ResetCharacterSceneRotation

Сбрасывает поворот персонажа в указанной сцене.

## Описание

```lua
mission.ResetCharacterSceneRotation( index: number )
```

Функция сбрасывает поворот персонажа в сцене с заданным индексом.

## Список параметров

- **`index`** (`number`) - Индекс сцены, принимает значения от `0` до `GetMaxCharacterSceneCount() - 1`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Сброс поворота в нулевой сцене

```lua
mission.ResetCharacterSceneRotation( 0 )
```

## Смотрите также

- [GetMaxCharacterSceneCount](function.mission.GetMaxCharacterSceneCount)