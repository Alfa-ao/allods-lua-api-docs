# mission.ClearCharacterScene

Удаляет всех персонажей со сцены.

## Описание

```lua
mission.ClearCharacterScene( index: number )
```

Функция инициирует удаление всех персонажей с указанной сцены.

## Список параметров

- **`index`** (`number`) - Индекс сцены, принимает значения от `0` до `GetMaxCharacterSceneCount() - 1`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Очистка нулевой сцены

```lua
mission.ClearCharacterScene( 0 )
```

## Смотрите также

- [mission.GetMaxCharacterSceneCount](function.mission.GetMaxCharacterSceneCount)