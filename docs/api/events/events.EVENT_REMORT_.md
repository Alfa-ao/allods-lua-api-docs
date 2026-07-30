## EVENT_REMORT_ABILITY_SHARING_REQUEST

### Описание

```lua
EVENT_REMORT_ABILITY_SHARING_REQUEST
```

Событие присылается при запросе на расшаривание умений для альта главного игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_REMORT_CHARACTER_SCENE_CAMERA_READY

### Описание

```lua
EVENT_REMORT_CHARACTER_SCENE_CAMERA_READY
```

Событие присылается, когда в окне создания реморта камера закончила движение после вызова `remortCreation.SetCameraPath`.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [remortCreation.SetCameraPath](/api/category/remortCreation/function.remortCreation.SetCameraPath.md)

---

## EVENT_REMORT_LIST_GAINED

### Описание

```lua
EVENT_REMORT_LIST_GAINED
```

Событие присылается, когда приходит список ремортов для переключения главного игрока на один из них.

### Список параметров

Параметры отсутствуют.

---

## EVENT_REMORT_SHOW_CREATION_DIALOG

### Описание

```lua
EVENT_REMORT_SHOW_CREATION_DIALOG
```

Событие присылается при запросе на создание реморта. Необходимо показать диалог создания реморта.

### Список параметров

Параметры отсутствуют.

---

## EVENT_REMORT_VARIATIONS_INFO_CHANGED

### Описание

```lua
EVENT_REMORT_VARIATIONS_INFO_CHANGED
```

Событие присылается при обновлении информации о вариациях персонажей.

### Список параметров

Параметры отсутствуют.

---

## EVENT_REMORT_ZOOM_TRIGGER_CHANGED

### Описание

```lua
EVENT_REMORT_ZOOM_TRIGGER_CHANGED
```

Событие присылается в режиме создания реморта, когда камера может назумливаться на лицо персонажа. При изменении состояния назумленности или возможности назумливаться присылается это сообщение.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [remortCreation.IsZoomEnabled](/api/category/remortCreation/function.remortCreation.IsZoomEnabled.md)
- [remortCreation.IsZoomOnFace](/api/category/remortCreation/function.remortCreation.IsZoomOnFace.md)
- [remortCreation.ToggleZoom](/api/category/remortCreation/function.remortCreation.ToggleZoom.md)