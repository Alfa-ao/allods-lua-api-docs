# mission.SetCharacterScenePosition

Устанавливает позицию персонажа в указанной сцене.

## Описание

```lua
mission.SetCharacterScenePosition( index: number, pos: table )
```

Функция устанавливает относительную позицию персонажа в заданной сцене, используя координаты из переданной таблицы.

## Список параметров

- **`index`** (`number`) - Индекс сцены, принимает значения в диапазоне `[0..GetMaxCharacterSceneCount() - 1]`.

- **`pos`** (`table`) - Таблица с относительной позицией персонажа, содержит следующие поля:

    - **`posX`** (`number`) - Смещение в сцене по оси X.

    - **`posY`** (`number`) - Смещение в сцене по оси Y.

    - **`posZ`** (`number`) - Смещение в сцене по оси Z.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка позиции персонажа

```lua
mission.SetCharacterScenePosition( 0, { posX = 1.0; posY = 2.0; posZ = 0.0 } )
```

## Смотрите также

- [mission.GetMaxCharacterSceneCount](function.mission.GetMaxCharacterSceneCount)