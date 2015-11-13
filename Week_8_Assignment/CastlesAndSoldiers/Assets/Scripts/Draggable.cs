using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.EventSystems;

public class Draggable : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler {

	public static GameObject itemBeingDragged;
	Vector3 startposition;
	Transform startParent;

	public Transform parentToReturnTo = null;
	public Transform placeholderParent = null;

	GameObject placeholder = null;

	public enum Slot {Offense, Defense, Both};
	public Slot typeOfItem = Slot.Offense;

	public void OnBeginDrag(PointerEventData eventData){
		//Debug.Log ("OnBeginDrag");

		itemBeingDragged = gameObject;
		startposition = transform.position;
		startParent = transform.parent;
		GetComponent<CanvasGroup> ().blocksRaycasts = false;


		placeholder = new GameObject ();
		placeholder.transform.SetParent ( this.transform.parent );
		LayoutElement le = placeholder.AddComponent<LayoutElement>();
		le.preferredWidth = this.GetComponent<LayoutElement> ().preferredWidth;
		le.preferredHeight = this.GetComponent<LayoutElement> ().preferredHeight;
		le.flexibleWidth = 0;
		le.flexibleHeight = 0;

		placeholder.transform.SetSiblingIndex (this.transform.GetSiblingIndex());

		parentToReturnTo = this.transform.parent;
		placeholderParent = parentToReturnTo;
		this.transform.SetParent (this.transform.parent.parent);

		GetComponent<CanvasGroup> ().blocksRaycasts = false;

		// DropZone[] zones = GameObject.FindObjectOfType<DropZone>(); // How to glow
	}

	public void OnDrag(PointerEventData eventData){
		//Debug.Log ("OnDrag");

		transform.position = Input.mousePosition;

		this.transform.position = eventData.position;

		if (placeholder.transform.parent != placeholderParent) {
			placeholder.transform.SetParent(placeholderParent);
		}

		int newSiblingIndex = placeholderParent.childCount;

		for(int i = 0; i < placeholderParent.childCount; i++){
			if(this.transform.position.x < placeholderParent.GetChild(i).position.x){

				newSiblingIndex = i;

				if(placeholder.transform.GetSiblingIndex() < newSiblingIndex){
					newSiblingIndex--;
				}

				break;
			}
		}

		placeholder.transform.SetSiblingIndex (newSiblingIndex);
	}

	public void OnEndDrag(PointerEventData eventData){
		//Debug.Log ("OnEndDrag");

		itemBeingDragged = null;
		GetComponent<CanvasGroup> ().blocksRaycasts = true;
		if (transform.parent = startParent) {
			transform.position = startposition;
		}


		this.transform.SetParent (parentToReturnTo);
		this.transform.SetSiblingIndex (placeholder.transform.GetSiblingIndex());

		GetComponent<CanvasGroup> ().blocksRaycasts = true;

		Destroy (placeholder);
		// EventSystem.current.RaycastAll(evenData)
	}

}

