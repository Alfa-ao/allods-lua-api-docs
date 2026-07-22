# mission.SetCharacterSceneScaleFactor

Масштабирует персонажа в указанной сцене.

## Описание

```lua
mission.SetCharacterSceneScaleFactor( index: number, scale: number )
```

Функция устанавливает коэффициент масштабирования модели персонажа в заданной сцене.

## Список параметров

- **`index`** (`number`) - Индекс сцены. Значение находится в диапазоне от `0` до `GetMaxCharacterSceneCount() - 1`.

- **`scale`** (`number`) - Коэффициент масштабирования.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Масштабирование персонажа

```lua
mission.SetCharacterSceneScaleFactor( 0, 1.5 )
```

## Смотрите также

- [mission.GetMaxCharacterSceneCount](function.mission.GetMaxCharacterSceneCount)